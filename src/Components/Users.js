import React from 'react'
import { Box, Card, Typography } from '@mui/material'

const Users = ({ flagg, list }) => {
    console.log(list);

    return (
        <div className='flex justify-center'>
            { flagg ?
                (<div className='flex flex-col'>
                    <Typography>Users</Typography>
                    <Card className='grid grid-rows-1 grid-cols-3 text-xs '>
                        <Typography>First Name</Typography>
                        <Typography>Last Name</Typography>
                        <Typography>Job Title</Typography>
                    </Card>
                    <Box className='mt-3 h-screen overflow-y-scroll w-full'>

                        { list.map(item =>
                            <Card className='grid grid-rows-1 grid-cols-3 text-xs ' key={ item.id } variant='outlined'>
                                <Typography>{ item.first_name }</Typography>
                                <Typography>{ item.last_name }</Typography>
                                <Typography>{ item.job }</Typography>
                            </Card>
                        ) }
                    </Box>
                </div>
                ) : "" }
        </div>
    )
}

export default Users