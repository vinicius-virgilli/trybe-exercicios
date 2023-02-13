# Vimos sobre a composição básica do SO (Sistema Operacional) e os primeiros comandos no terminal

Anotações do dia:

unix
1969 desenvolvido por Ken Thompson e Dennis Ritchie
suporte a multiusuários
multitarefas
portabilidade


kernel
núcleo do SO
responsável pela interação entre hardware e software
gerencia: memória, processos e arquivos

shell
segundo nível
interface entre SO - usuário - Kernel (núcleo)
o login é feito pelo shell
pode ser utilizado através de uma interface de linha de comando ou através de uma interface gráfica

sua função é ler a linha de comando, interpretá-la, executá-la e devolver o resultado para o usuário

tipos de shell:
SH
BASH
CSH
TCSH
ZSH

Aplicativos
terceira camada do SO
são os softwares e a maioria dos comandos do unix

processos (todo comando ou tarefa para o unix é um processo, e são identificados pelo PID) e arquivos (tudo, diretórios, arquivos e dispositivos)

hierarquia dos arquivos

/ root


/ (diretório raiz)
~ (diretório home)

comandos 
ls              lista os arquivos no diretório
ls -a              =   todos os arquivos, inclusive os ocultos (começados com ponto)

cd
TAB
clear
mkdir
cd .        referencia ao diretório atual
cd ..       referencia ao diretório pai (anterior)
pwd  mostra o path (caminho) completo do diretório atual
touch cria um arquivo
~    siginifica que você está dentro do diretório raiz dentro daquele contexto.. que normalmente é seu usuário
cp   copy
cat  "contatenar"
mv    move determinado arquivo para determinado diretório
rm   remove (apaga arquivo)
rmdir  remove diretório vazio
rmdir -rf (r - remover   f - sem confirmação)
touch nome_do_arquivo{1..5}tipo_do_arquivo
less arquivo.txt (mostra o conteúdo do arquivo.txt em páginas separadas, e para vizualizar a página seguinte é só apertar espaço, e para sair a tecla q)
head (mostra as 10 primeiras linhas do conteúdo do arquivo)
head -5 (apenas os 5 primeiros valores)
tail (mostra os 10 últimos valores do conteúdo da arquivo)
tail -5 (apenas os últimos 5)

por que preciso saber usar o terminal?
R: maior poder sobre o computador
grep th arquivo.txt (mostra palavras com th no arquivo.txt)
grep -i Th arquivo.txt (mostra palavras com th no arquivo.txt, sem distinção entre letras maiúsculas e minúsculas)
grep -iv a arquivo.txt (mostra sem case sensitive todas as linhas do arquivo.txt que não possuem a letra a
grep -in a arquivo.txt (mesmo que grep -i a arquivo.txt porém também traz a linha)
grep -ic traz a quantidade de vezes que se encontra o que se quer encontrar em determinado arquivo
para saber quantas linhas um arquivo tem é só dar o comando wc (word count) ele retorna nº de linhas, nº de palavras e o nº de caracteres
para só linhas wc -l
para só palavras wc -w
para só caracteres wc -m
para quant
man
whatis fala o que o comando faz
apropos comandos relacionados 
cat consegue receber valores do usuário
control d fecha o recebimento de valores do usuário

cat > names.txt  cria o arquivo names.txt e espera para digitar o conteúdo 
control c (finaliza o processo)
control z pausa o processo
cat >> adiciona informação ao arquivo
cat > sobreescreve informação ao arquivo
sort ordena o conteúdo de texto de um arquivo
| (comando pipe)  comunica que a saída do comando anterior será a entrada do comando posterior
grep a names.txt  (procura por palavras com a letra a no arquivo names.txt)
sort -n (ordenação numérica)
sort     ordena em órdem alfabética
tail -1
find . -name '*.txt'
echo 
. (diretório atual)
history
history -c (limpa o histórico)
man find (traz o manual do comando find)
who
curl é uma ferramenta para transferir dados de ou para um servidor
o comando rev retorno um imput de forma invertida


comandos divertidos
cowsay
cmatrix
sl -f
telnet towel.blinkenlights.nl
