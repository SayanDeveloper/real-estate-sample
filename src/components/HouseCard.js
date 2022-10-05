import React from 'react'
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { IoBedOutline } from "react-icons/io5";
import { BiArea, BiBath } from "react-icons/bi";
import "../styles/Card.css"

const HouseCard = ({ details }) => {
    return (
        <Box w="310px" borderRadius="10px" overflow="hidden" bg="white" mt="30px"
        >
            <Image 
                src={details.image}
                w="100%"
                h="170px"
                objectFit="cover"
            />
            <Box p={4}>
                <Flex mt="10px" justifyContent="space-between">
                    <Box>
                        <Text color={"#696298"}><span id="price-tag">${details.rent}</span>/month</Text>
                        <Text fontSize={22} fontWeight={500}>{details.name}</Text>
                    </Box>
                    <Box w="35px" h="35px" borderRadius="50%" border="1px solid #bbb"></Box>
                </Flex>
                <Text color="#949390">2699, Green Valley, Highland Lake</Text>
                <Divider mt="15px" mb="10px" />
                <Flex justifyContent="space-between">
                    <Flex gap="4px" alignItems="center">
                        <IoBedOutline color='#696298' fontSize={18} />
                        <Text color="#747370">{details.props.beds} Beds</Text>
                    </Flex>
                    <Flex gap="4px" alignItems="center">
                        <BiBath color='#696298' fontSize={18} />
                        <Text color="#747370">{details.props.bathrooms} Bathrooms</Text>
                    </Flex>
                    <Flex gap="4px" alignItems="center">
                        <BiArea color='#696298' fontSize={18} />
                        <Text color="#747370">{details.props.size} m<sup>2</sup></Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default HouseCard
