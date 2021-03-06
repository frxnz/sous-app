const { withLayout } = require('components/Layout');
const Home = require('routes/home/components/Home');
const Recipes = require('routes/recipes/components/Recipes');
const Pantry = require('routes/pantry/components/Pantry');
const Recipe = require('routes/recipe/components/Recipe');
const NewRecipe = require('routes/recipe/components/New');

module.exports = [
    {
        path: '/',
        component: withLayout(Home),
        options: {
            title: 'Home'
        }
    },
    {
        path: '/recipes',
        component: withLayout(Recipes),
        options: {
            title: 'Recipes'
        }
    },
    {
        path: '/pantry',
        component: withLayout(Pantry),
        options: {
            title: 'Pantry'
        }
    },
    {
        path: '/recipe',
        component: withLayout(Recipe),
        options: {
            title: 'Recipe'
        }
    },
    {
        path: '/recipe/new',
        component: withLayout(NewRecipe),
        options: {
            title: 'New Recipe'
        }
    }
];
