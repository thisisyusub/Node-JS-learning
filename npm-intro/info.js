const requestHandler = (req, res) => {
    res.write('Topics\n');
    res.write('npm init / npm init -y\n');
    res.write('start command\n');
    res.write('npm run custom-script\n');
    res.write('nodemon\n');
    res.write('npm install package-name --save --save-dev -g\n');

    res.end();
}

module.exports = requestHandler;