Title: FAQ
Description: Aqui você tem as respostas das pergundas mais comuns quando se fala da ferramenta CITSmart.
# Perguntas Frequentes - FAQ

!!! Question "O que é um plano de classificação, temporalidade e destinação?"

    O plano de classificação, temporalidade e destinação é o mecanismo que a instituição/organização tem para organizar e 
    classificar seus processos e documentos de arquivo em assuntos.

    Este plano é organizado em uma estrutura hierárquica, na qual um elemento pai pode possuir um ou vários elementos filhos, 
    sem limite de replicação. O mesmo plano de classificação será utilizado por toda a organização.

    Cada item do plano de classificação, temporalidade e destinação é chamado de elemento. Cada elemento possui, no mínimo, um 
    código e um assunto. O código é um facilitador para identificar o elemento da árvore.

    Cada elemento criado pode ou não possuir um elemento pai, que é o denominado elemento superior. Sendo assim, podemos criar 
    um elemento pai, um elemento filho, e um elemento neto, sem nenhum prejuízo na aplicação.

    Além disso, cada elemento pode ou não ser utilizado como classificação, ou seja, você poderá definir se o elemento é um 
    elemento fim ou apenas um agrupador.
    
    Saiba mais em [Mantendo um plano de classificação, temporalidade e destinação](/pt-br/citsmart-docs/user-guide/operate/plan.html).
   
!!! Question "Como é calculada a temporalidade de documentos e processos?"

    A temporalidade é calculada com base na Fase corrente e a Fase intermediária (em anos).

    - Fase corrente (Primeira idade): Segundo o Dicionário de Terminologia Arquivística (D.T.A.) de 1996, página 6, é o “conjunto
    de documentos estritamente vinculados aos objetivos imediatos para os quais foram produzidos e recebidos no cumprimento de 
    atividades fim e meio e que se conservam junto aos órgãos produtores em razão de sua vigência e da freqüência com que são 
    por eles consultados”. Essa idade corresponde a produção do documento, sua tramitação, a finalização do seu objetivo e a sua 
    guarda.
    - Fase Intermediária (Segunda idade): “Conjunto de documentos originários de arquivo corrente, com uso pouco freqüente, que
    aguardam, em depósito de armazenamento temporário, sua destinação final” (D.T.A. 1996, p. 7). Os documentos são ainda 
    conservados por razões administrativas, legais ou financeiras. É uma fase de retenção temporária que se dá por razões de 
    precaução.
    
    A fórmula para este cálculo é: se FC < TVP então (FC-TVP) = 0

    - TVP = Tempo de Vida do Processo antes de sua conclusão em todas as unidades
    - FC = Tempo previsto para a fase corrente
    - FI = Tempo previsto para a fase intermediária
    - TTG = Tempo total de guarda após conclusão em todas as unidades
    - TTG = (FC-TVP) + FI
    
!!! Question "O que acontece quando a temporalidade é atingida?"

    O processo/documento segue para a sua destinação final. A destinação define o que acontecerá com o processo/documento 
    quando sua temporalidade for atingida. Poderá ser:
    
    - Eliminação: os artefatos serão eliminados permanentemente.
    - Guarda permanente: os artefatos serão guardados permanentemente no servidor de guarda de documentos.
    
    A destinação é definida no conhecimento [Mantendo um plano de classificação, temporalidade e destinação](/pt-br/citsmart-docs/user-guide/operate/plan.html).
    
!!! Question "Como eu incluo um documento no sistema?"

    Poderão ser incluídos documentos em várias extensões no sistema. Ao incluir um documento, deverão ser informados os
    metadados, que variam de acordo com a forma de criação, se online ou anexo. Saiba mais no conhecimento [Incluindo um
    documento](/pt-br/citsmart-docs/user-guide/operate/adding.html).
    
!!! Question "Como eu localizo um processo ou documento no sistema?"

    Caso o processo esteja aberto na sua unidade, você poderá localizá-lo tanto na tela de processos abertos/gerados 
    ([Pesquisando processos abertos/gerados na unidade](/pt-br/citsmart-docs/user-guide/operate/searching.html)) como na tela 
    de pesquisa ([Pesquisando todos os processos e os documentos](/pt-br/citsmart-docs/user-guide/operate/search-all-processes.html))
    
    Caso o processo esteja concluído em todas as unidades, você poderá localizá-lo através da tela de processos arquivados
    ([Visualizando todos os processos arquivados](/pt-br/citsmart-docs/user-guide/operate/viewing.html))
    
!!! Question "Como funciona a privacidade dos processos e dos documentos?"

    Os processos e documentos podem ser públicos, restritos ou sigilosos:

    - Público - Acesso permitido por qualquer usuário do sistema.
    - Restrito – Acesso apenas pela unidade onde o processo ou documento está aberto/será tramitado, pode ter os metadados
    localizados na pesquisa, mas não pode ter o conteúdo acessado por usuários que não pertencem à unidade onde o processo 
    está aberto/será tramitado;
    - Sigiloso – Possui 3 sub-níveis (reservado, secreto, ultrassecreto), e só pode ser acessado por usuários que possuam a 
    credencial de acesso ao processo ou documento. O processo ou documento sigiloso não pode aparecer nos resultados das 
    pesquisas de usuários que não possuem a credencial de acesso do mesmo;
    
!!! Question "Qual a diferença entre remover e cancelar um documento?"

    A remoção só pode ocorrer quando o documento não tiver sido assinado. Após assinatura, o documento somente poderá ser 
    cancelado. Isso ocorrer para que sejam mantidas trilhas de auditoria.
    
!!! Question "Como eu vinculo Workflows aos processos?"

    Os workflows devem ser criados no Neuro, que é um módulo de bpm da aplicação. Após isso, workflows podem ser executados
    dentro do processo Docs. Para saber mais sobre o Neuro, veja o conhecimento Visão Geral (Neuro).
    
!!! Question "Como eu crio templates para os documentos?"

    Podem ser criados templates para documentos criados via editor de texto da aplicação. Os modelos de documentos ([Mantendo
    modelos de documentos](/pt-br/citsmart-docs/user-guide/operate/document-template.html)) são compostos de:

    - Cabeçalho: é cadastrado no menu de cabeçalhos. Os cabeçalhos podem ser reaproveitados em diversos tipos de documento.
    - Conteúdo: é cadastrado na própria tela de modelos de documentos. Este é o template do corpo do documento.
    - Rodapé: é cadastrado no menu de rodapés. Os rodapés também podem ser reaproveitados em diversos tipos de documento.
    
!!! Question "Existe uma forma de alterar um processo que já foi concluído em todas as unidades?"

    Sim, mas para isso é necessário solicitar a reabertura do processo ([Solicitando a reabertura de um processo](/pt-br/citsmart-docs/user-guide/operate/reopen.html))
    
!!! Question "Como funciona o compartilhamento de processos com outras unidades organizacionais?"

    Os processos podem ser tramitados para outras unidades através da funcionalidade de envio de processos ([Enviar processos](/pt-br/citsmart-docs/user-guide/operate/submit-processes.html)).
    
!!! Question "Quem é responsável pela validação dos processos e documentos sigilosos?"

    Processos e documentos sigilosos precisam de validação de um grupo especial de usuários. Eles são responsáveis por 
    determinar se o nível de sigilo foi devidamente classificado. Os responsáveis são os usuários com permissão de acesso de
    protocolo. Para isso, o administrador do sistema deverá realizar a configuração de forma correta.
    
!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço
















