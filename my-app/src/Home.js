import "./Home.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import BlogPost from "./BlogPost";

function Home() {
  return (
    <body>
      <header>
        <a href="/">
          <Logo className="logo" />
        </a>
        <a href="/create" className="create">
          + Create a Post
        </a>
      </header>
      <div className="intro">
        <h1>Get inspired. Learn fitness</h1>
        <p>Explore all fitness posts from others around the world</p>
      </div>
      <section className="grid-home">
        <div className="search-bar">
          <p>Search ...</p>
        </div>
        <div className="categories dropdown">
          <p>Categories</p>
        </div>
        <div className="sort dropdown">
          <p>Sort by</p>
        </div>
      </section>
      <section>
        <BlogPost
          title="Keto Diet"
          author="Deer John"
          category="Food and Nutrition"
          calories={true}
          caloriesName="+300"
          diet={true}
          dietName="Keto Diet"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt eget nullam non nisi."
        />
        <br />
        <br />
        <BlogPost
          title="Badminton Drills"
          author="Sara Chong"
          category="Sports Training"
          calories={false}
          caloriesName=""
          diet={false}
          dietName=""
          sport={true}
          sportName="Badminton"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt eget nullam non nisi."
        />
        <br />
        <br />
        <BlogPost
          title="Leg Day for Days"
          author="Alen Chan"
          category="Strength Training"
          calories={false}
          caloriesName=""
          diet={false}
          dietName=""
          time={true}
          timeName="2 hours"
          strength={true}
          strengthName="Leg Training"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt eget nullam non nisi."
        />
        <br />
        <br />
      </section>
    </body>
  );
}

export default Home;
