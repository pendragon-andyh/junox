const {EOL} = require('os');

exports.logReporter = (out = process.stdout) => async stream => {
    for await (const message of stream) {
        if (message.type === 'BAIL_OUT') {
            throw message.data;
        }
        out.write(`${JSON.stringify(message)}${EOL}`);
    }
};