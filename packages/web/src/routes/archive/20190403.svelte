<script>
	import A from '@ctx-core/a__target/A__Target.svelte'
	import Date__Local from '@ctx-core/date/Date__Local.svelte'
</script>

<header>
	<p class="date"><span><Date__Local date="2019-04-03"></Date__Local></span></p>
	<h2>Site Redesign</h2>
</header>

<p>
	This is my microblog, where I will be posting ideas, news, etc.
	It is <A href="/archive">archived</A>.
	There is also a <A href="/blog">blog</A> which contains longer articles.
</p>

<p>
	Here's the <A href="https://github.com/btakita/briantakita.com">source code</A> for this site.
</p>

<h3>Naming Conventions</h3>

<p>
	I've been experimenting & making progress with <A href="/posts/naming-conventions">Naming Conventions</A>.
	Naming conventions for immutable entities has proven to reduce incidental complexity.
	I'm working on fleshing out the last details & a whitepaper. Please stay tuned.
	This practice has helped me remove incidental complexity from my codebases.
</p>

<h3>Svelte</h3>

<p>
	I'm also a fan of <A href="https://v3.svelte.technology/">Svelte (v3)</A> &
		<A href="https://sapper.svelte.technology/">Sapper</A>.
	Svelte is provides truly reactive stores & html components.
	Html components mean it's easy for programmers & non-programmers (e.g. designers) to work with.
	Svelte is compiled, resulting in a payload that is small, fast, & memory efficient.
</p>

<h3>Holochain</h3>

<p>
	Lately, I have been turned onto <A href="https://holochain.org/">Holochain</A>.
	Thanks to <A href="https://medium.com/@sunyatax">Eric Yang</A>,
		founder of <A href="https://holo.host/project/junto/">Junto</A> for introducing me to this technology.
</p>

<p>I've read through:</p>

<ul>
	<li><A href="https://github.com/holochain/holochain-proto/blob/whitepaper/holochain.pdf">Holochain Whitepaper</A></li>
	<li><A href="https://files.holo.host/2017/11/Holo-Currency-White-Paper_2017-11-28.pdf">Holo Currency Paper</A></li>
	<li><A href="https://files.holo.host/2018/03/Holo-Green-Paper.pdf">Holo Green Paper</A></li>
</ul>

<p>
	I encourage you to read these papers,
		as they explain the state of distributed networks & the innovations
		that Holochain & the Holo currency bring.
</p>
