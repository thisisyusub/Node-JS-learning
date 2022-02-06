const requestHandler = (req, res) => {
    res.write('Topics\n');
    res.write('npm init / npm init -y\n');
    res.write('start command\n');

    res.end();
}

module.exports = requestHandler;