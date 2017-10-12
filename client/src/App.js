import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { Input, TextArea, FormBtn } from "./components/Form";
import Button from "./components/Button";
import API from "./utils/API";
// import logo from './logo.svg';
import { ArticleList, ArticleListItem } from "./components/ArticleList";
import { Container, Row, Col } from "./components/Grid";
import './App.css';

class App extends Component {
  state = {
    articles: [],
    articleSearch: "",
    beginDate: "",
    endDate: "",
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles update the articles state
    event.preventDefault();
    API.getArticles(this.state.articleSearch)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-6">
              <form>
                  <Input
                    name="articleSearch"
                    value={this.state.articleSearch}
                    onChange={this.handleInputChange}
                    placeholder="Search For an Article"
                  />
                  <Input
                    name="beginDate"
                    value={this.state.beginDate}
                    onChange={this.handleInputChange}
                    placeholder="Enter a begin date"
                  />
                  <Input
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    placeholder="Enter an end date"
                  />
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.articles.length ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
                <ArticleList>
                  {this.state.articles.map(article => {
                    return (
                      <ArticleListItem
                        key={article.title}
                        title={article.headline.main}
                        href={article.web_url}
                        content={article.snippet}
                      />
                    );
                  })}
                </ArticleList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
