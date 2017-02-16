/*
 * Define the book lists and abbreviations.
 */ 

var bible_books = ['Title Page', 'Epistle Dedicatory', 'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];

var ot_books = ['Title Page', 'Epistle Dedicatory', 'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];

var nt_books = ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];

var bible_abbr = ['title-page', 'dedication', 'gen', 'ex', 'lev', 'num', 'deut', 'josh', 'judg', 'ruth', '1-sam', '2-sam', '1-kgs', '2-kgs', '1-chr', '2-chr', 'ezra', 'neh', 'esth', 'job', 'ps', 'prov', 'eccl', 'song', 'isa', 'jer', 'lam', 'ezek', 'dan', 'hosea', 'joel', 'amos', 'obad', 'jonah', 'micah', 'nahum', 'hab', 'zeph', 'hag', 'zech', 'mal', 'matt', 'mark', 'luke', 'john', 'acts', 'rom', '1-cor', '2-cor', 'gal', 'eph', 'philip', 'col', '1-thes', '2-thes', '1-tim', '2-tim', 'titus', 'philem', 'heb', 'james', '1-pet', '2-pet', '1-jn', '2-jn', '3-jn', 'jude', 'rev'];


var ot_abbr = ['title-page', 'dedication', 'gen', 'ex', 'lev', 'num', 'deut', 'josh', 'judg', 'ruth', '1-sam', '2-sam', '1-kgs', '2-kgs', '1-chr', '2-chr', 'ezra', 'neh', 'esth', 'job', 'ps', 'prov', 'eccl', 'song', 'isa', 'jer', 'lam', 'ezek', 'dan', 'hosea', 'joel', 'amos', 'obad', 'jonah', 'micah', 'nahum', 'hab', 'zeph', 'hag', 'zech', 'mal'];

var nt_abbr = ['matt', 'mark', 'luke', 'john', 'acts', 'rom', '1-cor', '2-cor', 'gal', 'eph', 'philip', 'col', '1-thes', '2-thes', '1-tim', '2-tim', 'titus', 'philem', 'heb', 'james', '1-pet', '2-pet', '1-jn', '2-jn', '3-jn', 'jude', 'rev'];

var ot_url = "ot";
var nt_url = "nt";

var bom_books = ['1 Nephi', '2 Nephi', 'Jacob', 'Enos', 'Jarom', 'Omni', 'Words of Mormon', 'Mosiah', 'Alma', 'Helaman', '3 Nephi', '4 Nephi', 'Mormon', 'Ether', 'Moroni'];
var bom_abbr = ['1-ne', '2-ne', 'jacob', 'enos', 'jarom', 'omni', 'w-of-m', 'mosiah', 'alma', 'hel', '3-ne', '4-ne', 'morm', 'ether', 'moro'];
var bom_url = "bofm";

var pgp_books = ['Abraham', 'Moses', ['JS - M', 'JSM', 'Joseph Smith - Matthew'], ['JSH','Joseph Smith - History'], 'Articles of Faith'];
var pgp_abbr = ['abr', 'moses', 'js-m', 'js-h','a-o-f'];
var pgp_url = 'pgp'

var dc_books = [['D&C','D&amp;C']];
var dc_abbr = ['dc'];
var dc_url = 'dc_testament';
var book_sets = [[ot_books, ot_abbr, ot_url], [nt_books, nt_abbr, nt_url], [bom_books, bom_abbr, bom_url], [pgp_books, pgp_abbr, pgp_url], [dc_books, dc_abbr, dc_url]];

function replace(books, abbreviations,url_piece) {

    for (var i = 0; i < books.length; i++) {
	var bookNames = books[i];
	if (typeof(bookNames) == "string") {
	    bookNames = [bookNames];
	}
	for (var j = 0; j < bookNames.length; j++) {
	    var bookRegExp = new RegExp("("+ bookNames[j] + ") ((\\d*)(\\:\\d*(\\-\\d*)?)?)","g");
	    document.body.innerHTML = document.body.innerHTML.replace(bookRegExp,
								      function (match, pt1, pt2, pt3, pt4, pt5, offset, entire) {
									  // pt1 will contain the name of the book.
									  // pt2 will contain the chapter and verse as applicable.
									  stringbuilder = "<a href='https://www.lds.org/scriptures/";
									  stringbuilder += url_piece;
									  stringbuilder += "/";
									  stringbuilder += abbreviations[i];
									  stringbuilder += "/";

									  pt2 = pt2.replace(":","."); // they use a period to separate the verse.
									  stringbuilder += pt2;
									  stringbuilder += "' target='_blank' style='display:inline-block'>";
									  stringbuilder += match;
									  stringbuilder += "</a>";
									  //								      alert(stringbuilder);
									  
									  /*								      b = c;
																	      a.replace(/[^.|\[\]]+/g, function (a) {
																	      b = b[a];
																	      })
									  */
									  return stringbuilder;});
	    
	}
    }
}

function replace_all() {
    for (var i = 0; i < book_sets.length; i++) {
	replace(book_sets[i][0], book_sets[i][1], book_sets[i][2]);
    }
}

replace_all();
