import whois
entrada_consulta = input("ALVO: ")
consulta = whois.whois(entrada_consulta)
print(consulta.text)
