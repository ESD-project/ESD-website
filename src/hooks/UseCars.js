import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
const GET_CARS = gql`
{
    cars{
        id
        Name
        Brand
    }
}
`;
export default   graphql(GET_CARS);