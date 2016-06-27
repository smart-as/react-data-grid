const React              = require('react');
const joinClasses         = require('classnames');
const DEFINE_SORT = {
  ASC: 'ASC',
  DESC: 'DESC',
  NONE: 'NONE'
};

const SortableHeaderCell = React.createClass({
  propTypes: {
    columnKey: React.PropTypes.string.isRequired,
    column: React.PropTypes.shape({ name: React.PropTypes.node }),
    onSort: React.PropTypes.func.isRequired,
    sortDirection: React.PropTypes.oneOf(['ASC', 'DESC','NONE'])
  },

  onClick: function() {
    let direction;
    switch (this.props.sortDirection) {
    default:
    case null:
    case undefined:
    case DEFINE_SORT.NONE:
    case DEFINE_SORT.DESC:
      direction = DEFINE_SORT.ASC;
      break;
    case DEFINE_SORT.ASC:
      direction = DEFINE_SORT.DESC;
      break;
    //case DEFINE_SORT.DESC:
    //  direction = DEFINE_SORT.NONE;
    //  break;
    }
    this.props.onSort(
      this.props.columnKey,
      direction);
  },

  render: function(): ?ReactElement {
    let className = joinClasses({
      'react-grid-HeaderCell-sortable': !this.props.sortDirection,
      'react-grid-HeaderCell-sortable--ascending': this.props.sortDirection === 'ASC',
      'react-grid-HeaderCell-sortable--descending': this.props.sortDirection === 'DESC'
    });
    return (
      <div className={className}
        onClick={this.onClick}
        style={{cursor: 'pointer'}}>
        {this.props.column.name}
        <span className="pull-right"></span>
      </div>
    );
  }
});

module.exports = SortableHeaderCell;
