import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  topTitle: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

// const RecipeList = ({ recipeList }) => {
const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);
  const classes = useStyles();

  const seedData = () => {
    setRecipeList(
      [...new Array(20)].map((e, i) => ({
        id: i,
        title: "title",
        subTitle: "subtitle feeds",
        image: `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 100) +
          1}`,
        featured: `${Math.floor(Math.random() * 2) + 1}`,
      }))
    );
  };

  useEffect(() => {
    seedData();
  }, []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={140} spacing={2} cols={4} className={classes.gridList}>
        {recipeList.length > 0
          ? recipeList.map(e => (
              <GridListTile
                key={e.id}
                cols={parseInt(e.featured) === 2 ? 2 : 1}
                rows={parseInt(e.featured) === 2 ? 2 : 1}
              >
                {/* <img src={"https://spoonacular.com/recipeImages/" + e.image} alt={e.title} /> */}
                <img src={e.image} alt={e.title} />
                <GridListTileBar
                  className={classes.topTitle}
                  title={e.title}
                  subtitle={e.subTitle}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${e.title}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
                <GridListTileBar
                  titlePosition="top"
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${e.title}`}
                      className={classes.icon}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))
          : ""}
      </GridList>
    </div>
  );
};

export default RecipeList;
