import { Archive, Boxes, Camera, MapPin, Search, Shirt } from "lucide-react";

const stats = [
  { label: "Items", value: "0", icon: Boxes },
  { label: "Categories", value: "6", icon: Archive },
  { label: "Locations", value: "0", icon: MapPin },
];

const categories = ["Clothes", "Shoes", "Books", "Electronics", "Daily Goods", "Misc"];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Personal inventory</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-normal">Store</h1>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-medium transition hover:bg-accent">
              <Search className="size-4" />
              Search
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              <Camera className="size-4" />
              Add item
            </button>
          </div>
        </header>

        <section className="grid gap-4 py-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <Icon className="size-4 text-muted-foreground" />
                </div>
                <div className="mt-4 text-2xl font-semibold">{stat.value}</div>
              </div>
            );
          })}
        </section>

        <section className="grid flex-1 gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="border-r pr-4">
            <h2 className="text-sm font-medium">Categories</h2>
            <div className="mt-3 space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="flex h-9 w-full items-center gap-2 rounded-md px-2 text-left text-sm transition hover:bg-accent"
                >
                  <Shirt className="size-4 text-muted-foreground" />
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <Boxes className="size-10 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">No items yet</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Add your first item to start tracking what you own, where it is stored, and which images belong to it.
            </p>
            <button className="mt-5 inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              <Camera className="size-4" />
              Add first item
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
