import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { top100Films } from './films';
import { countries } from './countries';

export default function AutoComplete() {
  const options = ['Option 1', 'Option 2'];
  const [value2, setValue2] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.label,
  };

  const flatProps = {
    options: top100Films.map((option) => option.label),
  };

  const [value, setValue] = useState(null);

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <h3>Random Demo</h3>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Movie' />}
      />
      <hr />
      <h3>Disable Close on Select</h3>After making a selection, the dropdown
      list will not close
      <Autocomplete
        {...defaultProps}
        id='disable-close-on-select'
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label='disableCloseOnSelect'
            variant='standard'
          />
        )}
      />
      <hr />
      <h3>Clear on Escape</h3>Escape key clears the value in the input field
      <Autocomplete
        {...defaultProps}
        id='clear-on-escape'
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label='clearOnEscape' variant='standard' />
        )}
      />
      <hr />
      <h3>Disable Clearable</h3>Removes the little 'X' to clear value from the
      input field
      <Autocomplete
        {...defaultProps}
        id='disable-clearable'
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label='disableClearable' variant='standard' />
        )}
      />
      <hr />
      <h3>Include Input In List</h3>Includes the input as the first item in the
      list. When browsing the list with the up and down keys, the input will
      focus before the first auto suggestion and after the last auto suggestion
      <Autocomplete
        {...defaultProps}
        id='include-input-in-list'
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label='includeInputInList'
            variant='standard'
          />
        )}
      />
      <hr />
      <Autocomplete
        {...flatProps}
        id='flat-demo'
        renderInput={(params) => (
          <TextField {...params} label='flat' variant='standard' />
        )}
      />
      <hr />
      <Autocomplete
        {...defaultProps}
        id='controlled-demo'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label='controlled' variant='standard' />
        )}
      />
      <hr />
      <h3>Autocomplete</h3>When looking through suggestions with the up and down
      arrows, it will autocomplete the input field with current suggestion
      <Autocomplete
        {...defaultProps}
        id='auto-complete'
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label='autoComplete' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='disable-list-wrap'
        // If true, the list box in the popup will not wrap focus.
        disableListWrap
        renderInput={(params) => (
          <TextField {...params} label='disableListWrap' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='open-on-focus'
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label='openOnFocus' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='auto-highlight'
        // Highlights the selected option
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label='autoHighlight' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='auto-select'
        autoSelect
        renderInput={(params) => (
          <TextField {...params} label='autoSelect' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='disabled'
        disabled
        renderInput={(params) => (
          <TextField {...params} label='disabled' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='disable-portal'
        disablePortal
        renderInput={(params) => (
          <TextField {...params} label='disablePortal' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='blur-on-select'
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label='blurOnSelect' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='clear-on-blur'
        clearOnBlur
        renderInput={(params) => (
          <TextField {...params} label='clearOnBlur' variant='standard' />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id='select-on-focus'
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label='selectOnFocus' variant='standard' />
        )}
      />
      <Autocomplete
        id='country-select-demo'
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component='li'
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading='lazy'
              width='20'
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=''
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Choose a country'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <div>
        <div>{`value: ${value2 !== null ? `'${value2}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
        <Autocomplete
          value={value2}
          onChange={(event, newValue) => {
            setValue2(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id='controllable-states-demo'
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' />
          )}
        />
      </div>
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
