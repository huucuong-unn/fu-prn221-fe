import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Switch,
    Box,
    FormControlLabel,
    TextField,
    Autocomplete,
    Button,
    Modal,
    Typography,
} from '@mui/material';

import { styled } from '@mui/system';

import { useEffect, useState } from 'react';

function AdPromotion() {
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isValueValid, setIsValueValid] = useState(true);
    const [isDescriptionValid, setIsDescriptionValid] = useState(true);

    const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
        ({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                        opacity: 1,
                        border: 0,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
            },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        }),
    );

    const promotions = [
        {
            id: 1,
            name: 'Big sale october',
            description:
                'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
            discount: '10%',
            startDate: '31/10/2003',
            endDate: '1/1/2003',
        },
        {
            id: 2,
            name: 'Big sale october',
            description: 'Promotion description',
            discount: '10%',
            startDate: '31/10/2003',
            endDate: '1/1/2003',
        },
        {
            id: 3,
            name: 'Big sale october',
            description: 'Promotion description',
            discount: '10%',
            startDate: '31/10/2003',
            endDate: '1/1/2003',
        },
        {
            id: 4,
            name: 'Big sale october',
            description: 'Promotion description',
            discount: '10%',
            startDate: '31/10/2003',
            endDate: '1/1/2003',
        },
        {
            id: 5,
            name: 'Big sale october',
            description: 'Promotion description',
            discount: '10%',
            startDate: '31/10/2003',
            endDate: '1/1/2003',
        },
        {
            id: 6,
            name: 'Big sale october',
            description: 'Promotion description',
            discount: '10%',
            startDate: '31/10/2003',
            endDate: '1/1/2003',
        },
    ];

    const status = ['Active', 'Inactive'];

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        console.log(name);
        const value = parseFloat(event.target.value.value);
        const description = event.target.description.value;

        if (name.length < 5 || name.length > 50) {
            setIsNameValid(false);
        } else {
            setIsNameValid(true);
        }

        if (isNaN(value) || value < 0 || value > 1) {
            setIsValueValid(false);
        } else {
            setIsValueValid(true);
        }

        if (description.length < 5 || description.length > 100) {
            setIsDescriptionValid(false);
        } else {
            setIsDescriptionValid(true);
        }
    };

    useEffect(() => {
        console.log(isNameValid);
    }, [isNameValid]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Button variant="contained" size="medium" onClick={handleOpenCreateModal}>
                    Create
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                    <TextField id="outlined-basic" label="Promotion name..." variant="outlined" size="small" />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={status}
                        renderInput={(params) => <TextField {...params} label="Status" />}
                        size="small"
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                            gap: 2,
                            border: '1px solid #ccc',
                            borderRadius: 2,
                            padding: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography>Start date</Typography>
                            <TextField id="outlined-basic" variant="outlined" size="small" type="date" />
                        </Box>
                        <Typography>to</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography>End date</Typography>
                            <TextField id="outlined-basic" variant="outlined" size="small" type="date" />
                        </Box>
                    </Box>
                    <Button variant="contained" size="medium">
                        Search
                    </Button>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                ID
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Name
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Description
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Discount
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Start date
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                End Date
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {promotions.map((promotion) => (
                            <TableRow
                                key={promotion.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleRowClick(promotion)}
                            >
                                <TableCell component="th" scope="row">
                                    {promotion.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {promotion.name}
                                </TableCell>
                                <TableCell align="left" sx={{ maxWidth: '300px' }}>
                                    {promotion.description}
                                </TableCell>
                                <TableCell align="left">{promotion.discount}</TableCell>
                                <TableCell align="left">{promotion.startDate}</TableCell>
                                <TableCell align="left">{promotion.endDate}</TableCell>
                                <TableCell align="left">
                                    {' '}
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label="Active"
                                        onClick={(event) => event.stopPropagation()} // Ngăn chặn sự kiện click lan ra
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal open={isCreateModalOpen} onClose={handleCloseCreateModal}>
                <Box
                    sx={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'fit-content',
                        bgcolor: '#f5f5f5',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Create Promotion
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            border: '1px solid #ccc',
                            padding: 2,
                            borderRadius: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'left',
                            gap: 2,
                            minWidth: '500px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                sx={{ flex: 1 }}
                                error={!isNameValid}
                                helperText={!isNameValid ? 'Name must be 5-50 characters long' : ''}
                            />
                            <TextField
                                id="value"
                                label="Value"
                                variant="outlined"
                                sx={{ flex: 1 }}
                                error={!isValueValid}
                                helperText={!isValueValid ? 'Value must be from 0 to 1' : ''}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'end',
                                justifyContent: 'center',
                                gap: 2,
                                border: '1px solid #ccc',
                                borderRadius: 2,
                                padding: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography>Start date</Typography>
                                <TextField id="outlined-basic" variant="outlined" size="small" type="date" />
                            </Box>
                            <Typography>to</Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography>End date</Typography>
                                <TextField id="outlined-basic" variant="outlined" size="small" type="date" />
                            </Box>
                        </Box>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            rows={5}
                            sx={{ width: '100%', flex: 1 }}
                            error={!isDescriptionValid}
                            helperText={!isDescriptionValid ? 'Description must be 5-100 characters long' : ''}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'right', gap: 2, mt: 1 }}>
                            <Button variant="outlined" onClick={handleCloseCreateModal}>
                                Close
                            </Button>
                            <Button variant="contained" type="submit">
                                Create
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default AdPromotion;
