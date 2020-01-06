import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  makeCards = () => {
    return this.props.quotes.map(quote => {
      return (
        <QuoteCard 
          key={quote.id}
          quote={quote}
          removeQuote={this.props.removeQuote}
          upvoteQuote={this.props.upvoteQuote}
          downvoteQuote={this.props.downvoteQuote}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { this.makeCards() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(
  (state) => state,
  { removeQuote, upvoteQuote, downvoteQuote }
)(Quotes);
