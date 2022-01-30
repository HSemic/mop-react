import * as React from 'react';
import { useState, useEffect } from 'react';

import { makeStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { validateQuestionText } from '../../services/validationService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/_redux/reducers/rootReducer';

import { postQuestionRequest } from '../../app/_redux/actions/questionActions';
import FormMessage from '../atoms/FormMessage';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  formPaper: {
    padding: '2rem 2rem'
  },
  formBox: {
    // width: '50%'
  },
  formInput: {
    width: '100%'
  },
  formButton: {
    height: '4.5rem'
  }
});

export interface QuestionApiData {
  id: string;
  title: string;
  authorId: string;
  datetime: string;
}

const config = {
  validationErrors: {
    question: 'Question needs to be between 8 and 150 characters long.'
  }
};

const AddQuestionForm = (): React.ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [questionText, setQuestionText] = useState('');
  const [questionError, setQuestionError] = useState('');

  const { loggedInUser } = useSelector((state: RootState) => state.user);
  const { error, pending, currentQuestion } = useSelector(
    (state: RootState) => state.question
  );

  const navigate = useNavigate();

  const onQuestionInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestionText(event.currentTarget.value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!loggedInUser) return;

    const validQuestion = validateQuestionText(questionText);

    if (!validQuestion) setQuestionError(config.validationErrors.question);
    else {
      dispatch(
        postQuestionRequest({
          title: questionText,
          authorId: loggedInUser.id,
          datetime: Date.now(),
          likes: 0,
          dislikes: 0
        })
      );
    }
  };

  return (
    <Paper className={classes.formPaper}>
      <Box component="form" onSubmit={onFormSubmit}>
        <Grid container gap={2} direction="column">
          <Grid item xs={12}>
            <TextField
              className={classes.formInput}
              label="Question Text"
              multiline
              rows={4}
              value={questionText}
              onChange={onQuestionInputChange}
              variant="outlined"
            />
          </Grid>
          {error && error.length > 0 ? (
            <Grid item>
              <FormMessage type="error" text={error} />
            </Grid>
          ) : null}
          <Grid item>
            {!pending ? (
              <Button
                className={`${classes.formInput} ${classes.formButton}`}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            ) : (
              <LoadingButton
                className={`${classes.formInput} ${classes.formButton}`}
                loading
                variant="outlined"
              >
                Submit
              </LoadingButton>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default AddQuestionForm;
