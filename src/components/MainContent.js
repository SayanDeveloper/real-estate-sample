import React, { useRef, useState } from 'react'
import { Box, Button, Divider, Flex, Input, Select, Text } from '@chakra-ui/react'
import HouseCard from './HouseCard';

const MainContent = () => {

    const [locationFilter, setLocationFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState();
    const [typeFilter, setTypeFilter] = useState();
    const dateLabel = useRef();

    return (
        <Box bg="#f8f7fd" minH="calc(100vh - 85px)">
            <Box w="1000px" margin={"auto"}>
                <Flex justifyContent="space-between" alignItems="center" pt="40px">
                    <Text fontSize="35px" fontWeight="600">Search properties to rent</Text>
                    <Input type="search" w="260px" placeholder='Search with Search Bar' bg="white" />
                </Flex>
                <Flex bg="white" borderRadius={"10px"} boxShadow="0px 0px 4px #eef" mt="25px" p="20px"
                    justifyContent="space-between" alignItems="center">
                    <Box>
                        <Text>Location</Text>
                        <Select defaultValue="label" variant="flushed" size='md'>
                            <option disabled={true} value="label">Choose Location</option>
                            <option value="">New York, USA</option>
                            <option value="">Chicago, USA</option>
                            <option value="">Los Angeles, USA</option>
                            <option value="">London, England</option>
                            <option value="">Manchester, England</option>
                        </Select>
                    </Box>
                    <Divider orientation='vertical' w="3px" color={"black !important"} h="60px" />
                    <Box pos="relative">
                        <Text>When</Text>
                        <Input
                            size="sm"
                            type="date"
                            w="190px"
                            cursor="pointer" 
                            border="none"
                            onChange={(e) => {
                                console.log(e.target.value);
                                setDateFilter(e.target.value);
                            }}
                            onFocus={() => {
                                dateLabel.current.style.display = "none";
                            }}
                        />
                        <Text ref={dateLabel} id="date-label" pos="absolute" bottom="5px" left="0px" bg="white" pointerEvents="none" zIndex={3} py={"2px"}>
                            Select Move-in Date
                        </Text>
                    </Box>
                    <Divider orientation='vertical' w="3px" color={"black !important"} h="60px" />
                    <Box>
                        <Text>Price</Text>
                        <Select defaultValue="label" variant="flushed" size='md'>
                            <option disabled={true} value="label">Choose Price</option>
                            <option value="0">$500 - $2500</option>
                            <option value="0">$2500 - $5000</option>
                            <option value="0">$5000 - $10000</option>
                        </Select>
                    </Box>
                    <Divider orientation='vertical' w="3px" color={"black !important"} h="60px" />
                    <Box>
                        <Text>Property Type</Text>
                        <Select defaultValue={"label"} variant="flushed" size='md'>
                            <option value="label" disabled={true}>Choose Type</option>
                            <option value="">Houses</option>
                            <option value="">Flat</option>
                            <option value="">All</option>
                        </Select>
                    </Box>
                    <Divider orientation='vertical' w="3px" color={"black !important"} h="60px" />
                    <Button size="lg" colorScheme="purple">Search</Button>
                </Flex>
                <Flex justifyContent={"space-between"} wrap="wrap">
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                </Flex>
            </Box>
        </Box>
    )
}

export default MainContent
