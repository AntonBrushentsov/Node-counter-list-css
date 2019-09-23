import React from 'react';

class List extends React.Component {
        render() {
            const {data, title} = this.props;
        return (
            <div>
                <h3>List</h3>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default List;
