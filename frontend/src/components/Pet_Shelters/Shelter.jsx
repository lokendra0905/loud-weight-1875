import React, { useState } from 'react'
import Sidebar from './SideBar'
import { Box } from '@chakra-ui/react'

import { useSearchParams } from 'react-router-dom'
import ShelterList from './ShelterList'
import Pagination from './Pagination'


export const Shelter = () => {

    const [searchparam] = useSearchParams()

    const initpage = searchparam.get('page')

    const [page, setpage] = useState(initpage || 1)
    return (

        <Box>
            <Box style={{ display: 'flex', gap: '5px', marginTop: '25px' }}>
                <Box style={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    height: '90vh',
                    width: '15%',

                }}>
                    <Sidebar page={page} />
                </Box>

                <Box style={{
                    width: '82%', margin: 'auto',
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                }}>
                    <ShelterList />
                </Box>
            </Box>


            <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px auto' }}>
                <Pagination setpage={setpage} page={page} />
            </Box>

        </Box>


    )
}


