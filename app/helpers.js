export function getItemSlugs() {
    return fs.readdirSync(itemDirectory)
}

export function getItemBySlug(slug, fields) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    Items = {} // string:string dictionary

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
        items[field] = realSlug
        }
        if (field === 'content') {
        items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
        items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}