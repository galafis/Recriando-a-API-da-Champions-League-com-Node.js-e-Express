
import { Request, Response } from 'express';
import { Team } from '../models/team';
import { teams } from '../database/teams';

// Comentário: Aqui seria ideal conectar um banco de dados real usando MongoDB ou PostgreSQL futuramente!

export const teamController = {
    create(req: Request, res: Response) {
        const { name, country } = req.body;
        const newTeam: Team = { id: Date.now().toString(), name, country };
        teams.push(newTeam);
        return res.status(201).json(newTeam);
    },

    list(req: Request, res: Response) {
        return res.json(teams);
    },

    find(req: Request, res: Response) {
        const team = teams.find(t => t.id === req.params.id);
        if (team) {
            return res.json(team);
        }
        return res.status(404).json({ message: 'Time não encontrado.' });
    },

    update(req: Request, res: Response) {
        const index = teams.findIndex(t => t.id === req.params.id);
        if (index !== -1) {
            teams[index] = { ...teams[index], ...req.body };
            return res.json(teams[index]);
        }
        return res.status(404).json({ message: 'Time não encontrado para atualização.' });
    },

    remove(req: Request, res: Response) {
        const index = teams.findIndex(t => t.id === req.params.id);
        if (index !== -1) {
            teams.splice(index, 1);
            return res.json({ message: 'Time removido com sucesso.' });
        }
        return res.status(404).json({ message: 'Time não encontrado para exclusão.' });
    }
};
