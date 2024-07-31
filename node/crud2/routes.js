import { Router } from 'express';
const router = Router();
import { object, number, string } from 'joi';


let planets = [
    { id: 1, name: 'Mercury' },
    { id: 2, name: 'Venus' },
    { id: 3, name: 'Earth' },
    { id: 4, name: 'Mars' }
];


const planetSchema = object({
    id: number().integer().required(),
    name: string().min(1).required()
});


router.get('/', (req, res) => {
    res.status(200).json(planets);
});


router.get('/:id', (req, res) => {
    const planet = planets.find(p => p.id === parseInt(req.params.id));
    if (!planet) return res.status(404).json({ msg: 'Planet not found' });
    res.status(200).json(planet);
});


router.post('/', (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const newPlanet = {
        id: req.body.id,
        name: req.body.name
    };
    planets.push(newPlanet);
    res.status(201).json({ msg: 'Planet created successfully' });
});


router.put('/:id', (req, res) => {
    const planet = planets.find(p => p.id === parseInt(req.params.id));
    if (!planet) return res.status(404).json({ msg: 'Planet not found' });

    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    planet.name = req.body.name;
    res.status(200).json({ msg: 'Planet updated successfully' });
});


router.delete('/:id', (req, res) => {
    const planetIndex = planets.findIndex(p => p.id === parseInt(req.params.id));
    if (planetIndex === -1) return res.status(404).json({ msg: 'Planet not found' });

    planets.splice(planetIndex, 1);
    res.status(200).json({ msg: 'Planet deleted successfully' });
});

export default router;
