import sequelize from '../config/db.js';
import AppError from '../errors/AppError.js';

const { teams: teamsModel, players: playersModel } = sequelize.models;

// Get all the teams
export async function getTeams(req, res) {
  const { limit } = req.query;
  const allTeams = await teamsModel.findAndCountAll({
    limit: limit ? Number(limit) : limit,
    include: [
      {
        model: playersModel, attributes: ['id', 'name', 'city']
      }
    ]
  });

  if (!allTeams) throw new AppError('Teams not found', 400);
  return res.status(200).json(allTeams);
}

// Get specific team
export async function getTeamById(req, res) {
  const { id } = req.params;
  if (!id) throw AppError('No id as param', 404);

  const team = await teamsModel.findOne({
    where: { id },
    include: [
      {
        model: playersModel, attributes: ['id', 'name', 'city']
      }
    ]
  });

  if (!team) throw new AppError('Team not found', 400);
  return res.status(200).json({ message: 'Team found successfully', data: team });
}

// Create a Team
export async function createTeam(req, res) {
  const { wins, gamesPlayed, groupId } = req.body;
  const newTeam = await teamsModel.create({
    wins,
    gamesPlayed,
    groupId
  });
  await newTeam.save();
  return res.status(201).json({ message: 'Team created successfully', data: newTeam });
}

// Update some team
export async function updateTeam(req, res) {
  const { body, params: { id } } = req;
  const team = await teamsModel.findByPk(id);
  if (!team) return res.status(404).json({ message: 'Team not found', data: null });

  const updatedTeam = await team.update({
    wins: body.wins,
    gamesPlayed: body.gamesPlayed,
    groupId: body.groupId
  });
  return res.json({ message: 'Team updated successfully', data: updatedTeam });
}
