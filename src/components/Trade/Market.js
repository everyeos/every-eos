import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import { Grid, Row, Col, Table } from 'react-bootstrap'

class Market extends Component {
  render() {
    const { marketStore } = this.props

    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Table responsive size="sm" hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Market</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {marketStore.tokens.data.tokens &&
                  marketStore.tokens.data.tokens.map(t => {
                    return (
                      <tr>
                        <th scope="row" />
                        <td>{t.market}</td>
                        <td>{t.last_price}</td>
                        <td>{t.change_24h}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default compose(
  inject('marketStore'),
  observer
)(Market)