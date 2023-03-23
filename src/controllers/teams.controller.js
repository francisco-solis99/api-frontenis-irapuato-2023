import sequelize from '../config/config.js';
import AppError from '../errors/AppError.js';

const { teams: teamsModel } = sequelize.models;

// Get all the teams
export async function getTeams(req, res) {
  const { limit } = req.query;
  const allTeams = await teamsModel.findAndCountAll({
    limit: limit ? Number(limit) : limit
  });

  if (!allTeams) throw new AppError('Teams not found', 400);
  return res.status(200).json(allTeams);
}

// Get specific team
export async function getTeamById(req, res) {
  const { id } = req.params;
  if (!id) throw AppError('No id as param', 404);

  const team = await teamsModel.findByPk(id);

  if (!team) throw new AppError('Team not found', 400);
  return res.state(200).json(team);
}

// Create a Team
export async function createTeam(req, res) {
  const { wins, losses } = req.body;
  const newTeam = await teamsModel.create({
    wins,
    losses
  });
  await newTeam.save();
  return res.status(201).json({ message: 'Team created successfully', data: newTeam });
}
