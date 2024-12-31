```javascript
class MyComponent extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('some-api')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    // Solution:  Conditional rendering
    if (this.state.data) {
      return (
        <View>
          {this.state.data.map(item => (
            <Text key={item.id}>{item.name}</Text>
          ))}
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}
```

```javascript
//Alternative solution using optional chaining
class MyComponent extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('some-api')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <View>
        {this.state.data?.map(item => (
          <Text key={item.id}>{item.name}</Text>
        )) || <Text>Loading...</Text>}
      </View>
    );
  }
}
```