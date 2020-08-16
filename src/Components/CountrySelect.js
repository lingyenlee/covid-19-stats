import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { GET_COUNTRIES } from '../Components/GetData'
import { useQuery } from '@apollo/react-hooks';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

const CountrySelect = (props) => {

    const classes = useStyles();
    const { data } = useQuery(GET_COUNTRIES);

    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Country
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={props.value}
                    onChange={(e) => props.onSelect(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>ALL</em>
                    </MenuItem>
                    {data && data.summary.countries.map(country =>
                        <MenuItem
                            key={country.Country_Region}
                            value={country.Country_Region}
                        >{country.Country_Region}
                        </MenuItem>

                    )}

                </Select>

            </FormControl>

        </>
    )
}

export default CountrySelect
