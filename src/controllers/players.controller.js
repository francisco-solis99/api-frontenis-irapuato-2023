import sequelize from '../config/db.js';
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
  return res.status(200).json({ message: 'Player found', data: player }); ;
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

// Update some player
export async function updatePlayer(req, res) {
  const { body, params: { id } } = req;
  const player = await playersModel.findByPk(id);
  if (!player) return res.status(404).json({ message: 'Player not found', data: null });

  const updatedPlayer = await player.update({
    name: body.name,
    city: body.city,
    teamId: body.teamId
  });
  return res.json({ message: 'Player updated successfully', data: updatedPlayer });
}
