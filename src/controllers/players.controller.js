import sequelize from '../config/config.js';

const { players: playersModel } = sequelize.models;

// Get all the players
export async function getPlayers(req, res) {
  const { limit } = req.query;
  try {
    const allPlayers = await playersModel.findAndCountAll({
      limit: limit ? Number(limit) : limit
    });
    return res.status(200).json(allPlayers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Get specific player
export async function getPlayerById(req, res) {
  const { id } = req.params;
  try {
    const player = await playersModel.findByPk(id);
    return res.state(200).json(player);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Create a player
export async function createPlayer(req, res) {
  const { name, nickName, pictureUrl, city, teamId } = req.body;
  try {
    const newPlayer = playersModel.create({
      name,
      nickName,
      pictureUrl,
      city,
      teamId
    });
    await newPlayer.save();
    return res.status(201).json({ message: 'Player created successfully', data: newPlayer });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
