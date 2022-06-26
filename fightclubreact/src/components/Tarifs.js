function Prix() {
    return (
        <div className="tarifs">
            <h1>Tarifs</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Age</th>
                        <th scope="col">Entrainement</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Age">7 ans / 10 ans</td>
                        <td data-label="Entrainement">Mercredi 14h-16h</td>
                        <td data-label="Prix">150€</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Age">11 ans / 13 ans</td>
                        <td data-label="Entrainement">Mercredi 16h-17h30</td>
                        <td data-label="Prix">170€</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Age">14 ans / 16 ans</td>
                        <td data-label="Entrainement">Lundi / Jeudi 18h-19h30</td>
                        <td data-label="Prix">200€</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Age">17 ans / 19 ans</td>
                        <td data-label="Entrainement">Mercredi / Vendredi 18h-19h30</td>
                        <td data-label="Prix">230€</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Age">19 ans et +</td>
                        <td data-label="Entrainement">Lundi / Mercredi / Vendredi 19h30-21h</td>
                        <td data-label="Prix">300€</td>
                    </tr><tr>
                        <td scope="row" data-label="Age">Preparation Combat
( horsEntrainement )</td>
                        <td data-label="Due Date">6 mois Intensif</td>
                        <td data-label="Prix">400€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}




/*<h3> Prix </h3>
            <ul class='list-prixtarifs'>
                <li>
                    <span class='titretarifs'> <span class="strong">7 ans / 10 ans</span>
                        <br/>
                    </span>
                    <span class='prixtarifs text-right'>150€</span>
                </li>
                <li class="des"><small>Mercredi 14h-16h</small></li>
                <li>
                    <span class='titretarifs'> <span class="strong">11 ans / 13 ans</span>
                        <br/>

                    </span>
                    <span class='prixtarifs text-right'>170€</span>
                </li>
                <li class="des"><small>Mercredi 16h-17h30</small></li>
                <li>
                    <span class='titretarifs'> <span class="strong">14 ans / 16 ans</span>
                        <br/>

                    </span>
                    <span class='prixtarifs text-right'>200€</span>
                </li>
                <li class="des"><small>Lundi / Jeudi 18h-19h30.</small></li>
                <li>
                    <span class='titretarifs'> <span class="strong">17 ans / 19 ans</span>
                        <br/>

                    </span>
                    <span class='prixtarifs text-right'>230€</span>
                </li>
                <li class="des"><small>Mercredi / Vendredi 18h-19h30</small></li>
                <li>
                    <span class='titretarifs'> <span class="strong">19 ans et +</span>
                        <br/>

                    </span>
                    <span class='prixtarifs text-right'>300€</span>
                </li>
                <li class="des"><small>Lundi / Mercredi / Vendredi 19h30-21h</small></li>
                <li>
                    <span class='titretarifs'> <span class="strong">Preparation Combat</span>
                        <br/>

                    </span>
                    <span class='prixtarifs text-right'>400€</span>
                </li>
                <li class="des"><small>6 mois Intensif</small></li>
            </ul>*/

export default Prix;