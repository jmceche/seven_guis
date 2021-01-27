import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Tasks from "./Tasks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mgbtm: { marginBottom: "3rem" },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h2' align='center' gutterBottom>
        Seven GUIs Challenge
      </Typography>
      <Container maxWidth='md'>
        <Typography variant='body1' component='p' display='block' gutterBottom>
          There are countless GUI toolkits in different languages and with
          diverse approaches to GUI development. Yet, diligent comparisons
          between them are rare. Whereas in a traditional benchmark competing
          implementations are compared in terms of their resource consumption,
          here implementations are compared in terms of their notation. To that
          end, 7GUIs defines seven tasks that represent typical challenges in
          GUI programming. In addition, 7GUIs provides a recommended set of
          evaluation dimensions.
        </Typography>
        <Typography
          variant='body1'
          component='p'
          display='block'
          gutterBottom
          className={classes.mgbtm}
        >
          One might wonder why such a project is useful. First, GUI programming
          is in fact not an easy task. 7GUIs may help in identifying and
          propagating better approaches to GUI programming, ultimately pushing
          programming forward. Second, alternative approaches to GUI programming
          and programming in general gained in popularity. Understanding the
          advantages and disadvantages of these alternatives versus the
          traditional OOP & MVC GUI development approach is interesting.
          Finally, there was no widely used set of tasks which represent typical
          GUI programming challenges when 7GUIs was conceived (2014).
        </Typography>

        <Typography variant='h2' align='center' gutterBottom>
          The 7 Tasks
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          The tasks were selected by the following criteria. The task set should
          be as small as possible yet reflect as many typical (or fundamental or
          representative) challenges in GUI programming as possible. Each task
          should be as simple and self-contained as possible yet not too
          artificial. Preferably, a task should be based on existing examples as
          that gives the task more justification to be useful and there already
          will be at least one reference implementation.
        </Typography>
        <Typography className={classes.mgbtm}>
          Below, a description of each task and a screenshot of a reference GUI
          application is given
        </Typography>

        <Tasks />
      </Container>
    </>
  );
};

export default Home;
