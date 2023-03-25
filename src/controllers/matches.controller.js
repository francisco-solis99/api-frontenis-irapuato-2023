import sequelize from '../config/db.js';
import AppError from '../errors/AppError.js';
const { matches: matchesModel } = sequelize.models;

// Get all the matches
export async function getMatches(req, res) {
  const { limit } = req.query;
  const allMatches = await matchesModel.findAndCountAll({
    limit: limit ? Number(limit) : limit
  });
  if (!allMatches) throw new AppError('Matches not found', 400);
  return res.status(200).json(allMatches);
}

// Get match by id
export async function getMatchById(req, res) {
  const { id } = req.params;
  const match = await matchesModel.findByPk(id);
  if (!match) {
    throw new AppError('Match not found', 400);
  }
  return res.state(200).json(match);
}

// Create a match
export async function createMatch(req, res) {
  const { hour, pointsTeam1, pointsTeam2, team1Id, team2Id } = req.body;
  const newMatch = await matchesModel.create({
    hour,
    pointsTeam1,
    pointsTeam2,
    team1Id,
    team2Id
  });
  await newMatch.save();
  return res.status(201).json({ message: 'Match created successfully', data: newMatch });
}

// Update some match
export async function updateMatch(req, res) {
  const { body, params: { id } } = req;
  const match = await matchesModel.findByPk(id);
  if (!match) throw new AppError('Match not found', 400);

  const updatedMatch = await match.update({
    hour: body.hour,
    pointsTeam1: body.pointsTeam1,
    pointsTeam2: body.pointsTeam2,
    team1Id: body.team1Id,
    team2Id: body.team2Id
  });
  return res.json({ message: 'Match created successfully', data: updatedMatch });
}
