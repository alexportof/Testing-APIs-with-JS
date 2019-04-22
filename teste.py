import urllib

content = urllib.urlopen('https://www.sympla.com.br/eventos/brasilia-df').read()
content = str(content)
find = '<div class="event-name">'
posicao = int(content.index(find) + len(find))
a = content.index(find)
print(a)
