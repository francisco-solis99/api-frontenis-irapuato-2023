import sequelize from '../config/config.js';
import AppError from '../errors/AppError.js';
const { players: playersModel } = sequelize.models;

// Get all the players
export async function getPlayers(req, res) {
  const { limit } = req.query;
  const allPlayers = await playersModel.findAndCountAll({
    limit: limit ? Number(limit) : limit
  });
  if (!allPlayers) throw new AppError('Players not found', 400);
  return res.status(200).json(allPlayers);
}

// Get player by id
export async function getPlayerById(req, res) {
  const { id } = req.params;
  const player = await playersModel.findByPk(id);
  if (!player) {
    throw new AppError('Player not found', 400);
  }
  return res.state(200).json(player);
}

// Create a player
export async function createPlayer(req, res) {
  const { name, city, teamId } = req.body;
  const newPlayer = await playersModel.create({
    name,
    city,
    teamId
  });
  await newPlayer.save();
  return res.status(201).json({ message: 'Player created successfully', data: newPlayer });
}
