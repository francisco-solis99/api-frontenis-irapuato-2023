import sequelize from '../config/config.js';

const { teams: teamsModel } = sequelize.models;

// Get all the teams
export async function getTeams(req, res) {
  const { limit } = req.query;
  try {
    const allTeams = await teamsModel.findAndCountAll({
      limit: limit ? Number(limit) : limit
    });
    return res.status(200).json(allTeams);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Get specific team
export async function getTeamById(req, res) {
  const { id } = req.params;
  try {
    const team = await teamsModel.findByPk(id);
    return res.state(200).json(team);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Create a Team
export async function createTeam(req, res) {
  const { wins, losses } = req.body;
  try {
    const newTeam = teamsModel.create({
      wins,
      losses
    });
    await newTeam.save();
    return res.status(201).json({ message: 'Team created successfully', data: newTeam });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
