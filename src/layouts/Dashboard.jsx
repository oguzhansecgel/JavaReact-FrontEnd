import React from 'react'
import Category from './Category'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid >
        <Grid.Row>
          <Grid.Column width={4}>
            <Category></Category>
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList></ProductList>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}
