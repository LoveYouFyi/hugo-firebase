+++
widget = "blank"
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 20  # Order that this section will appear in.

title = "Code"
# ... Put Your Section Options Here (title etc.) ...

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
+++
```javascript
class ClassWithRenderProp extends React.Component {
  componentDidMount() {
    doSomething(this.refs.myRef);
  }
  render() {
    return this.props.children();
  }
}

class ClassParent extends React.Component {
  render() {
    return (
      <ClassWithRenderProp>
        {() => <Button ref="myRef" />}
      </ClassWithRenderProp>
    );
  }
}
```