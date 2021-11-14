import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { OpenQuestion } from './OpenQuestion';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { MultiChoiceQuestion } from './MultiChoiceQuestion';

interface QuestionProps{}

interface QuestionState {
	optionSelected: string;
}


export class Question extends React.Component<QuestionProps,QuestionState>{
	public constructor(props: QuestionProps) {
		super(props);
		this.state = {
			optionSelected: 'Open'
		}
	}

	public render () {
		const {
			optionSelected,
		} = this.state;
		return (
			<React.Fragment>
				<Card sx={{my: '40px'}}>
					<CardContent style={{backgroundColor:'#D8BFD8'}}>
						<Box sx={{ flexGrow: 1, width:'100%'}}>
							<Grid container spacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>	
								<Grid item xs={10} sm={10} xl={11}>
									<FormControl fullWidth>
										<InputLabel id='label-type'>Type</InputLabel>
										<Select
											labelId='label-type'
											id='select'
											value={optionSelected}
											label='Type'
											onChange={this.handleChangeOption}
										>
											<MenuItem value={'Open'}>Open Question</MenuItem>
											<MenuItem value={'Multi'}>Multiple Choice Question</MenuItem>
											<MenuItem value={'Single'}>Single Choise Question</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={2} sm={2} xl={1}>
									<Button 
										variant="contained"
									 	fullWidth
										sx={{my: '10%', textAlign: 'center'}}
										style={{backgroundColor:'#916BBF'}}
										startIcon={<DeleteRoundedIcon sx={{mr: '-8px'}}/>}
									/>
								</Grid>
							</Grid>
						</Box>
					</CardContent>
					{optionSelected === 'Open' &&
						<OpenQuestion placeholder={'e.g. What do you think about Zmitac?'}/>
					}
					{optionSelected === 'Multi' &&
						<MultiChoiceQuestion placeholder={'e.g. Which ZMITAC teacher do you know?'}/>
					}
				</Card>		
			</React.Fragment>
		);
	}

	private readonly handleChangeOption = (event: SelectChangeEvent) => {
		this.setState({optionSelected: event.target.value as string});
	}
}