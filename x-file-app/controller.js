const sightingsData = require('./models/sightings.json');
const formPage = (req, res) => {
    res.render('form.ejs')
}
const showPage = (req, res) => {
    let result = '';
    const state =  req.query.state.toLowerCase();
    const city = req.query.city.toLowerCase();
    const shape = req.query.shape.toLowerCase();
    const date = req.query.date.toLowerCase();
    const duration = req.query.duration;

    const newData = sightingsData.filter((item) => {
        return (item.state.toLowerCase() == state || state == '') &&
                (item.city.toLowerCase() == city || city == '') &&
                (item.shape.toLowerCase() == shape || shape == '') &&
                (item.date.includes(date) || date == '')
    });
    res.render('show.ejs', 
    {
        newData, state, date, city, shape, duration
    })
}
module.exports = {
    formPage,
    showPage
}