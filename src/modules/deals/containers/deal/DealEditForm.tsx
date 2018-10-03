import gql from 'graphql-tag';
import * as React from 'react';
import { compose, graphql } from 'react-apollo';
import { DealEditForm } from '../../components';
import { queries } from '../../graphql';
import { IDeal, IDealParams } from '../../types';

type Props = {
  usersQuery: any;
  deal: IDeal;
  saveDeal: (doc: IDealParams, callback: () => void, deal?: IDeal) => void;
  removeDeal: (_id: string, callback?: () => void) => void;
};

class DealEditFormContainer extends React.Component<Props> {
  render() {
    const { usersQuery, deal } = this.props;

    const extendedProps = {
      ...this.props,
      deal,
      users: usersQuery.users || []
    };

    return <DealEditForm { ...extendedProps} />;
  }
}

export default compose(
  graphql(gql(queries.users), {
    name: 'usersQuery'
  })
)(DealEditFormContainer);
