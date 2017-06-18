"use strict";
function moretypes() {
    var klaus = { name: 'Klaus' };
    var hans = { name: 'Hans',
        instrument: 'Guitar'
    };
    function merge(n, i) {
        return {
            name: n.name,
            id: i.id
        };
    }
}
