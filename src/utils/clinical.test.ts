import test from 'node:test';
import assert from 'node:assert/strict';
import { CLINICAL_RESOURCES } from '../data/resources.ts';
import { CLINICAL_COLLECTIONS } from '../data/acervos.ts';
import { BONUS_DOCUMENTS } from '../data/bonuses.ts';

test('clinical collections verification', () => {
  assert.equal(CLINICAL_COLLECTIONS.length, 8, 'Must have exactly 8 clinical collections');
  for (const collection of CLINICAL_COLLECTIONS) {
    assert.equal(collection.resourceCount, 20, `Collection ${collection.name} must specify 20 resources`);
  }
});

test('clinical resources total count and distribution', () => {
  assert.equal(CLINICAL_RESOURCES.length, 160, 'Must have exactly 160 clinical resources across collections');
  for (let i = 1; i <= 8; i++) {
    const inCol = CLINICAL_RESOURCES.filter(r => r.collectionId === i);
    assert.equal(inCol.length, 20, `Collection ${i} must have exactly 20 clinical resources`);
  }
});

test('acervo 1 TDAH resources technical fidelity', () => {
  const tdahResources = CLINICAL_RESOURCES.filter(r => r.collectionId === 1);
  assert.equal(tdahResources.length, 20);
  for (let i = 1; i <= 20; i++) {
    const expectedId = `TDAH-${String(i).padStart(2, '0')}`;
    const resource = tdahResources.find(r => r.id === expectedId);
    assert.ok(resource, `Resource ${expectedId} must exist`);
    assert.ok(resource.title.length > 5, 'Title must be non-empty and descriptive');
    assert.ok(resource.ageRange.length > 5, 'Age range must be defined');
    assert.ok(resource.objective.length > 15, 'Objective must be clinically rich');
    assert.ok(resource.stepByStep.inicio.length > 10, 'Step inicio must be filled');
    assert.ok(resource.stepByStep.desenvolvimento.length > 10, 'Step desenvolvimento must be filled');
    assert.ok(resource.stepByStep.fechamento.length > 10, 'Step fechamento must be filled');
    assert.ok(resource.telehealthAdaptation.length > 10, 'Telehealth guidance must be filled');
    assert.ok(resource.clinicalTip.length > 10, 'O Pulo do Gato Clínico must be filled');
    assert.ok(resource.materialsIncluded.length >= 2, 'Must include materials');
  }
});

test('bonus documents verification from prompt attachments', () => {
  assert.equal(BONUS_DOCUMENTS.length, 5, 'Must contain the 5 authentic attached bonus documents');
  const bonus1 = BONUS_DOCUMENTS.find(b => b.bonusNumber === 1);
  assert.ok(bonus1 && bonus1.pagesCount === 18, 'Bonus 1 must have 18 pages of Anamnese');

  const bonus2 = BONUS_DOCUMENTS.find(b => b.bonusNumber === 2);
  assert.ok(bonus2 && bonus2.pagesCount === 6, 'Bonus 2 must have 6 pages of Devolutiva');

  const bonus3 = BONUS_DOCUMENTS.find(b => b.bonusNumber === 3);
  assert.ok(bonus3 && bonus3.pagesCount === 6, 'Bonus 3 must have 6 pages of Planejamento');

  const bonus4 = BONUS_DOCUMENTS.find(b => b.bonusNumber === 4);
  assert.ok(bonus4 && bonus4.pagesCount === 6, 'Bonus 4 must have 6 pages of Pais Dificeis');

  const bonus5 = BONUS_DOCUMENTS.find(b => b.bonusNumber === 5);
  assert.ok(bonus5 && bonus5.pagesCount === 5, 'Bonus 5 must have 5 laminas of Psicoeducacao');
});
