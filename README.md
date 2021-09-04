# Wedding-Invitation-Next

Wedding Invitation Next is Digital Wedding Invitation based on [Next.js](https://nextjs.org/). This project was created to help people create digital wedding invitation for free, but not cheap.

## Links

- [Repo](https://github.com/jepicode/wedding-invitation-next)

- [Live Demo](https://jepi-rere.vercel.app/ckfjdw)

## How to Use

### Download the Repo
Clone the repo using git

### `git clone https://github.com/jepicode/wedding-invitation-next.git`

or Just download as Zip

### Install Dependencies
Use the package manager like `npm` or `yarn`

- npm `npm install`
- yarn `yarn install`

### Create Configuration File
Because this project using MongoDB as Database, please get your MongoDB URI then put it in `env.local`

- `touch env.local`
- `vi env.local`
```javascript
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.tdm0q.mongodb.net/<DBNAME>
```

### Running at Local
Now you can start project in your local server.

### `yarn dev`

You can check the result at `localhost:3000`

## Project Information
This project running totally free.

- `MongoDB` use MongoDB atlas for free, so you can connect to Database for free and serverless.
- `Vercel` use Vercel as deployment for free, no commercial use. You can host your project to Vercel, connect it with github. You can change your domain if you don't wanna use `vercel.app` in URL.

This project using `tailwind.css`, so you don't have to worry creating many css files.

### Project Structure
- `pages` pages folder contains frontend and backend file. Because this project just single web page, so we don't need any folder for another pages.
- `pages/api` api folder contains backend file. There's 2 API in this project, to get list of greetings from guests, and to save greeting from guests.
- `components` components folder contains any component in frontend, so if you want to change the content of the page, you should change it here.
- `public` public folder contains static file to serve. Anything like images and song can be change here.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.