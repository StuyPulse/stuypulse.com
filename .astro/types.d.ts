declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"2012-12-27-kickoff.md": {
  id: "2012-12-27-kickoff.md",
  slug: "2012-12-27-kickoff",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-01-06-ultimate-ascent.md": {
  id: "2013-01-06-ultimate-ascent.md",
  slug: "2013-01-06-ultimate-ascent",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-01-26-this-year's-robot-name-unveiled.md": {
  id: "2013-01-26-this-year's-robot-name-unveiled.md",
  slug: "2013-01-26-this-years-robot-name-unveiled",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-02-02-introducing-the-new-stuypulse.com.md": {
  id: "2013-02-02-introducing-the-new-stuypulse.com.md",
  slug: "2013-02-02-introducing-the-new-stuypulsecom",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-02-03-check-your-documents-on-the-team-manager.md": {
  id: "2013-02-03-check-your-documents-on-the-team-manager.md",
  slug: "2013-02-03-check-your-documents-on-the-team-manager",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-03-03-join-us-at-the-new-york-city-regional.md": {
  id: "2013-03-03-join-us-at-the-new-york-city-regional.md",
  slug: "2013-03-03-join-us-at-the-new-york-city-regional",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-03-04-desiree-teaser-trailer.md": {
  id: "2013-03-04-desiree-teaser-trailer.md",
  slug: "2013-03-04-desiree-teaser-trailer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-03-10-victory-at-new-york.md": {
  id: "2013-03-10-victory-at-new-york.md",
  slug: "2013-03-10-victory-at-new-york",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-05-18-st-louis-and-looking-forward.md": {
  id: "2013-05-18-st-louis-and-looking-forward.md",
  slug: "2013-05-18-st-louis-and-looking-forward",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-05-26-potluck-dinner.md": {
  id: "2013-05-26-potluck-dinner.md",
  slug: "2013-05-26-potluck-dinner",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-06-21-stuypulse-alumni-association.md": {
  id: "2013-06-21-stuypulse-alumni-association.md",
  slug: "2013-06-21-stuypulse-alumni-association",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-09-28-interest-meeting-come-see-the-team.md": {
  id: "2013-09-28-interest-meeting-come-see-the-team.md",
  slug: "2013-09-28-interest-meeting-come-see-the-team",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-10-15-biannual-book-sale.md": {
  id: "2013-10-15-biannual-book-sale.md",
  slug: "2013-10-15-biannual-book-sale",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2013-12-12-stuy-splash-2013.md": {
  id: "2013-12-12-stuy-splash-2013.md",
  slug: "2013-12-12-stuy-splash-2013",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-01-04-aerial-assist.md": {
  id: "2014-01-04-aerial-assist.md",
  slug: "2014-01-04-aerial-assist",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-03-24-in-the-wake-of-buckeye.md": {
  id: "2014-03-24-in-the-wake-of-buckeye.md",
  slug: "2014-03-24-in-the-wake-of-buckeye",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-04-06-end-of-the-competition-season.md": {
  id: "2014-04-06-end-of-the-competition-season.md",
  slug: "2014-04-06-end-of-the-competition-season",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-05-17-monty-madness.md": {
  id: "2014-05-17-monty-madness.md",
  slug: "2014-05-17-monty-madness",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-08-16-on-the-road-to-china.md": {
  id: "2014-08-16-on-the-road-to-china.md",
  slug: "2014-08-16-on-the-road-to-china",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-08-18-china-robotics-challenge-day-one.md": {
  id: "2014-08-18-china-robotics-challenge-day-one.md",
  slug: "2014-08-18-china-robotics-challenge-day-one",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-08-20-crc-elimination-rounds.md": {
  id: "2014-08-20-crc-elimination-rounds.md",
  slug: "2014-08-20-crc-elimination-rounds",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2014-12-04-stuy-splash.md": {
  id: "2014-12-04-stuy-splash.md",
  slug: "2014-12-04-stuy-splash",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-01-03-recycle-rush.md": {
  id: "2015-01-03-recycle-rush.md",
  slug: "2015-01-03-recycle-rush",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-02-20-pegasus-1.md": {
  id: "2015-02-20-pegasus-1.md",
  slug: "2015-02-20-pegasus-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-03-10-visitors-from-china.md": {
  id: "2015-03-10-visitors-from-china.md",
  slug: "2015-03-10-visitors-from-china",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-03-16-nyc-regional-finalist.md": {
  id: "2015-03-16-nyc-regional-finalist.md",
  slug: "2015-03-16-nyc-regional-finalist",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-04-08-buckeye-and-onwards.md": {
  id: "2015-04-08-buckeye-and-onwards.md",
  slug: "2015-04-08-buckeye-and-onwards",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-04-20-upcoming-events.md": {
  id: "2015-04-20-upcoming-events.md",
  slug: "2015-04-20-upcoming-events",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-09-03-china-robotics-challenge.md": {
  id: "2015-09-03-china-robotics-challenge.md",
  slug: "2015-09-03-china-robotics-challenge",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-09-13-interest-meeting.md": {
  id: "2015-09-13-interest-meeting.md",
  slug: "2015-09-13-interest-meeting",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2015-12-10-stuy-splash.md": {
  id: "2015-12-10-stuy-splash.md",
  slug: "2015-12-10-stuy-splash",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-01-12-kickoff-2016.md": {
  id: "2016-01-12-kickoff-2016.md",
  slug: "2016-01-12-kickoff-2016",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-01-13-PS-110-demo.md": {
  id: "2016-01-13-PS-110-demo.md",
  slug: "2016-01-13-ps-110-demo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-03-04-weekly-newsletter.md": {
  id: "2016-03-04-weekly-newsletter.md",
  slug: "2016-03-04-weekly-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-04-07-regional-recap.md": {
  id: "2016-04-07-regional-recap.md",
  slug: "2016-04-07-regional-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-05-08-saint-louis.md": {
  id: "2016-05-08-saint-louis.md",
  slug: "2016-05-08-saint-louis",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-07-20-china-robotics-challenge-2016.md": {
  id: "2016-07-20-china-robotics-challenge-2016.md",
  slug: "2016-07-20-china-robotics-challenge-2016",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-10-04-book-sale.md": {
  id: "2016-10-04-book-sale.md",
  slug: "2016-10-04-book-sale",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-10-04-crc-2016-recap.md": {
  id: "2016-10-04-crc-2016-recap.md",
  slug: "2016-10-04-crc-2016-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-10-04-maker-faire.md": {
  id: "2016-10-04-maker-faire.md",
  slug: "2016-10-04-maker-faire",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-11-25-stuy-splash-2016.md": {
  id: "2016-11-25-stuy-splash-2016.md",
  slug: "2016-11-25-stuy-splash-2016",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-12-07-stuy-splash-2016-updates.md": {
  id: "2016-12-07-stuy-splash-2016-updates.md",
  slug: "2016-12-07-stuy-splash-2016-updates",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-12-21-stuy-splash-2016-summary.md": {
  id: "2016-12-21-stuy-splash-2016-summary.md",
  slug: "2016-12-21-stuy-splash-2016-summary",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2016-12-22-happy-holidays.md": {
  id: "2016-12-22-happy-holidays.md",
  slug: "2016-12-22-happy-holidays",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-01-15-kickoff.md": {
  id: "2017-01-15-kickoff.md",
  slug: "2017-01-15-kickoff",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-01-15-week-1-newsletter.md": {
  id: "2017-01-15-week-1-newsletter.md",
  slug: "2017-01-15-week-1-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-01-24-week-2-newsletter.md": {
  id: "2017-01-24-week-2-newsletter.md",
  slug: "2017-01-24-week-2-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-01-30-week-3-newsletter.md": {
  id: "2017-01-30-week-3-newsletter.md",
  slug: "2017-01-30-week-3-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-02-07-week-4-newsletter.md": {
  id: "2017-02-07-week-4-newsletter.md",
  slug: "2017-02-07-week-4-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-02-13-week-5-newsletter.md": {
  id: "2017-02-13-week-5-newsletter.md",
  slug: "2017-02-13-week-5-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-02-21-week-6-newsletter.md": {
  id: "2017-02-21-week-6-newsletter.md",
  slug: "2017-02-21-week-6-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-03-10-soflo-recap.md": {
  id: "2017-03-10-soflo-recap.md",
  slug: "2017-03-10-soflo-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-03-18-team-social.md": {
  id: "2017-03-18-team-social.md",
  slug: "2017-03-18-team-social",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-03-30-stuypulse-on-tv.md": {
  id: "2017-03-30-stuypulse-on-tv.md",
  slug: "2017-03-30-stuypulse-on-tv",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-04-05-nyc-regional.md": {
  id: "2017-04-05-nyc-regional.md",
  slug: "2017-04-05-nyc-regional",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-04-10-nyc-regional-recap.md": {
  id: "2017-04-10-nyc-regional-recap.md",
  slug: "2017-04-10-nyc-regional-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-05-07-competition-recap.md": {
  id: "2017-05-07-competition-recap.md",
  slug: "2017-05-07-competition-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-06-05-team-dinner.md": {
  id: "2017-06-05-team-dinner.md",
  slug: "2017-06-05-team-dinner",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-06-27-2016-2017-magazine.md": {
  id: "2017-06-27-2016-2017-magazine.md",
  slug: "2017-06-27-2016-2017-magazine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-06-27-team-dinner-presentations.md": {
  id: "2017-06-27-team-dinner-presentations.md",
  slug: "2017-06-27-team-dinner-presentations",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-07-22-nys-first-bill.md": {
  id: "2017-07-22-nys-first-bill.md",
  slug: "2017-07-22-nys-first-bill",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-07-23-first-global.md": {
  id: "2017-07-23-first-global.md",
  slug: "2017-07-23-first-global",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-08-05-lego-boost-build.md": {
  id: "2017-08-05-lego-boost-build.md",
  slug: "2017-08-05-lego-boost-build",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-08-09-crc-2017-recap.md": {
  id: "2017-08-09-crc-2017-recap.md",
  slug: "2017-08-09-crc-2017-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-09-11-2017-interest-meeting.md": {
  id: "2017-09-11-2017-interest-meeting.md",
  slug: "2017-09-11-2017-interest-meeting",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-09-19-join-the-team.md": {
  id: "2017-09-19-join-the-team.md",
  slug: "2017-09-19-join-the-team",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-09-25-summer-2017-newsletter.md": {
  id: "2017-09-25-summer-2017-newsletter.md",
  slug: "2017-09-25-summer-2017-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-10-18-september-2017-newsletter.md": {
  id: "2017-10-18-september-2017-newsletter.md",
  slug: "2017-10-18-september-2017-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-11-09-october-2017-newsletter.md": {
  id: "2017-11-09-october-2017-newsletter.md",
  slug: "2017-11-09-october-2017-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-11-12-mini-maker-faire.md": {
  id: "2017-11-12-mini-maker-faire.md",
  slug: "2017-11-12-mini-maker-faire",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-12-08-november-2017-newsletter.md": {
  id: "2017-12-08-november-2017-newsletter.md",
  slug: "2017-12-08-november-2017-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-12-23-stuysplash-2017-presentations.md": {
  id: "2017-12-23-stuysplash-2017-presentations.md",
  slug: "2017-12-23-stuysplash-2017-presentations",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2017-12-25-stuysplash-2017-photos.md": {
  id: "2017-12-25-stuysplash-2017-photos.md",
  slug: "2017-12-25-stuysplash-2017-photos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-01-01-december-newsletter.md": {
  id: "2018-01-01-december-newsletter.md",
  slug: "2018-01-01-december-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-01-14-week-1-newsletter.md": {
  id: "2018-01-14-week-1-newsletter.md",
  slug: "2018-01-14-week-1-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-01-27-week-2-newsletter.md": {
  id: "2018-01-27-week-2-newsletter.md",
  slug: "2018-01-27-week-2-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-01-29-week-3-newsletter.md": {
  id: "2018-01-29-week-3-newsletter.md",
  slug: "2018-01-29-week-3-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-02-06-week-4-newsletter.md": {
  id: "2018-02-06-week-4-newsletter.md",
  slug: "2018-02-06-week-4-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-02-16-week-5-newsletter.md": {
  id: "2018-02-16-week-5-newsletter.md",
  slug: "2018-02-16-week-5-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-02-26-week-6-newsletter.md": {
  id: "2018-02-26-week-6-newsletter.md",
  slug: "2018-02-26-week-6-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-03-01-build-season-vlogs.md": {
  id: "2018-03-01-build-season-vlogs.md",
  slug: "2018-03-01-build-season-vlogs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-04-10-cny-regional.md": {
  id: "2018-04-10-cny-regional.md",
  slug: "2018-04-10-cny-regional",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-04-15-nyc-regional.md": {
  id: "2018-04-15-nyc-regional.md",
  slug: "2018-04-15-nyc-regional",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-04-30-champs.md": {
  id: "2018-04-30-champs.md",
  slug: "2018-04-30-champs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-05-28-battlecry.md": {
  id: "2018-05-28-battlecry.md",
  slug: "2018-05-28-battlecry",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-06-30-highlights-2018.md": {
  id: "2018-06-30-highlights-2018.md",
  slug: "2018-06-30-highlights-2018",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-09-03-summer-2018-recap.md": {
  id: "2018-09-03-summer-2018-recap.md",
  slug: "2018-09-03-summer-2018-recap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-09-06-2018-interest-meeting.md": {
  id: "2018-09-06-2018-interest-meeting.md",
  slug: "2018-09-06-2018-interest-meeting",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-09-22-today-show.md": {
  id: "2018-09-22-today-show.md",
  slug: "2018-09-22-today-show",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-10-7-september-newsletter.md": {
  id: "2018-10-7-september-newsletter.md",
  slug: "2018-10-7-september-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-11-20-stuy-splash.md": {
  id: "2018-11-20-stuy-splash.md",
  slug: "2018-11-20-stuy-splash",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-11-9-october-newsletter.md": {
  id: "2018-11-9-october-newsletter.md",
  slug: "2018-11-9-october-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2018-12-5-november-newsletter.md": {
  id: "2018-12-5-november-newsletter.md",
  slug: "2018-12-5-november-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-01-02-december-newsletter.md": {
  id: "2019-01-02-december-newsletter.md",
  slug: "2019-01-02-december-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-01-21-week-1-newsletter.md": {
  id: "2019-01-21-week-1-newsletter.md",
  slug: "2019-01-21-week-1-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-01-21-week-2-newsletter.md": {
  id: "2019-01-21-week-2-newsletter.md",
  slug: "2019-01-21-week-2-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-01-29-week-3-newsletter.md": {
  id: "2019-01-29-week-3-newsletter.md",
  slug: "2019-01-29-week-3-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-02-09-week-4-newsletter.md": {
  id: "2019-02-09-week-4-newsletter.md",
  slug: "2019-02-09-week-4-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-04-01-march-newsletter.md": {
  id: "2019-04-01-march-newsletter.md",
  slug: "2019-04-01-march-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-11-21-october-newsletter.md": {
  id: "2019-11-21-october-newsletter.md",
  slug: "2019-11-21-october-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-12-04-november-newsletter.md": {
  id: "2019-12-04-november-newsletter.md",
  slug: "2019-12-04-november-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2020-1-03-december-newsletter.md": {
  id: "2020-1-03-december-newsletter.md",
  slug: "2020-1-03-december-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2020-12-03-fall-newsletter.md": {
  id: "2020-12-03-fall-newsletter.md",
  slug: "2020-12-03-fall-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2020-12-24-december-newsletter.md": {
  id: "2020-12-24-december-newsletter.md",
  slug: "2020-12-24-december-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-1-31-january-newsletter.md": {
  id: "2021-1-31-january-newsletter.md",
  slug: "2021-1-31-january-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-10-27-march-newsletter.md": {
  id: "2021-10-27-march-newsletter.md",
  slug: "2021-10-27-march-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-10-28-april-newsletter.md": {
  id: "2021-10-28-april-newsletter.md",
  slug: "2021-10-28-april-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-10-28-may-newsletter.md": {
  id: "2021-10-28-may-newsletter.md",
  slug: "2021-10-28-may-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-10-29-2021-newsletter.md": {
  id: "2021-10-29-2021-newsletter.md",
  slug: "2021-10-29-2021-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-12-12-october-newsletter.md": {
  id: "2021-12-12-october-newsletter.md",
  slug: "2021-12-12-october-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-12-13-november-newsletter.md": {
  id: "2021-12-13-november-newsletter.md",
  slug: "2021-12-13-november-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-3-9-february-newsletter.md": {
  id: "2021-3-9-february-newsletter.md",
  slug: "2021-3-9-february-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-1-18-december-newsletter.md": {
  id: "2022-1-18-december-newsletter.md",
  slug: "2022-1-18-december-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-11-02-september-newsletter.md": {
  id: "2022-11-02-september-newsletter.md",
  slug: "2022-11-02-september-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-11-16-stuy-splash.md": {
  id: "2022-11-16-stuy-splash.md",
  slug: "2022-11-16-stuy-splash",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-12-31-october-newsletter.md": {
  id: "2022-12-31-october-newsletter.md",
  slug: "2022-12-31-october-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-2-20-january-newsletter.md": {
  id: "2022-2-20-january-newsletter.md",
  slug: "2022-2-20-january-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-4-8-febuary-newsletter.md": {
  id: "2022-4-8-febuary-newsletter.md",
  slug: "2022-4-8-febuary-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-5-7-march-newsletter.md": {
  id: "2022-5-7-march-newsletter.md",
  slug: "2022-5-7-march-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-5-9-april-newsletter.md": {
  id: "2022-5-9-april-newsletter.md",
  slug: "2022-5-9-april-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-9-19-may-newsletter.md": {
  id: "2022-9-19-may-newsletter.md",
  slug: "2022-9-19-may-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-9-20-june-newsletter.md": {
  id: "2022-9-20-june-newsletter.md",
  slug: "2022-9-20-june-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-9-21-august-newsletter.md": {
  id: "2022-9-21-august-newsletter.md",
  slug: "2022-9-21-august-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2023-01-26-2023-november-newsletter.md": {
  id: "2023-01-26-2023-november-newsletter.md",
  slug: "2023-01-26-2023-november-newsletter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
