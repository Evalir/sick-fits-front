/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export default class DeleteItem extends Component {
  render() {
    return (
      <Mutation mutation={DELETE_ITEM_MUTATION} variables={this.props.id}>
        {(deleteItem, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteItem();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}
