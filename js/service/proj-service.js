"use strict"

var gProj = []

createProjs()

function getProj() {
    return gProj
}

function findProj(id) {
    return gProj.find(proj => proj.id === id)
}

function createProjs() {
    gProj.push(createProj('Mine-Sweeper', 'Mine-Sweeper',
        'The goal of the game is to uncover all the squares that do not contain mines.',
        'https://inbalem.github.io/sprint1-Mine-Sweeper/',
        Date.now() - (1000 * 60 * 60 * 24 * 10), ['game', 'mind game', 'pc game']))
}

function createProj(name, title, desc, url, date, labels, client= 'Training') {
    return {
        id: name,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: date,
        labels: [labels],
        client:client
    }
}