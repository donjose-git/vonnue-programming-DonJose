var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function Golfscore(par, storkes)
{
    if (storkes == 1)
    {
        return names[0];
    }
    else if (storkes <= par - 2)
    {
        return names[1];
    }
    else if (storkes == par - 1)
    {
        return names[2];
    }
    else if (storkes == names[3])
    {
        return names[3];
    }
    else if (storkes == par + 1)
    {
        return names[4];
    }
    else if (storkes == par + 2)
    {
        return names[5];
    }
    else (storkes >= par + 3)
    {
        return names[6];
    }
}
console.log(Golfscore(5, 8));