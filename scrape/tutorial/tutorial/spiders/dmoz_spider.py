import scrapy
from scrapy.selector import Selector

from scrapy.selector import HtmlXPathSelector
from scrapy.spider import BaseSpider


class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["chess.com"]
    start_urls = [
        "http://www.chess.com/livechess/game?id=1090265781"
    ]

    def parse(self, response):
        q = response.xpath('//*[@id="moves"]/div[2]').extract()
        print "TESTAS********************************************************"
        filename = response.url.split("/")[-2]
        with open(filename, 'wb') as f:
            #f.write(q)
            print q
            f.write("TR")
        #f.close()

           # //*[@id="mw-content-text"]/p[1]