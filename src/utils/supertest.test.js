import { expect } from 'chai';
import supertest from 'supertest';
import SingletonEnvironment from '../env/singletonEnvironment.js';

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { host, port } = environment.env.api;

const requester = supertest(`${host}:${port}`);

describe('Products API', () => {
    it('should return a list of products', async () => {
        
    });
});