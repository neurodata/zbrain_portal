import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeAtlas = this.handleChangeAtlas.bind(this);
    this.handleChangeRef = this.handleChangeRef.bind(this);
  }

  handleChangeAtlas(e) {
    this.props.onHandleShowAtlas(e.target.checked);
  }

  handleChangeRef(e) {
    this.props.onHandleShowRef(e.target.checked);
  }

  render() {
    return (
      <form>

        <label> Atlas
          <input
            name="showAtlas"
            type="checkbox"
            checked={this.props.showAtlas}
            onChange={this.handleChangeAtlas} />
        </label>

        <label> Reference
          <input
            name="showRef"
            type="checkbox"
            checked={this.props.showRef}
            onChange={this.handleChangeRef} />
        </label>

      </form>

    );
  }
}


export default Checkbox;
